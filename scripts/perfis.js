// Este arquivo controla a página de perfis do DevFlix.
// Ele cuida da lista de perfis, da criação de novos perfis e da mudança de tema.

// Este arquivo ajuda a gerenciar as imagens dos perfis
// Você pode adicionar novas imagens facilmente aqui!

const perfisImages = [
  '../../perfis/perfil-1.png',
  '../../perfis/perfil-2.png',
  '../../perfis/perfil-3.png',
  '../../perfis/perfil-4.png',
  '../../perfis/perfil-5.png',
  '../../perfis/perfil-6.png',
  '../../perfis/perfil-7.png',
  '../../perfis/perfil-8.png',
  '../../perfis/perfil-9.png',
  '../../perfis/perfil-10.png',
  // ADICIONE SUAS NOVAS IMAGENS AQUI!
  // Exemplo: '../../perfis/minha-imagem.jpg',
];

// Imagens padrão que sempre ficam disponíveis
const defaultImages = [
  // Removido: '../../assets/devflix_logo_transparent.png'
];

// Função que combina todas as imagens
function getAllProfileImages() {
  return [...perfisImages, ...defaultImages];
}

// Para adicionar uma nova imagem, basta:
// 1. Colocar a imagem na pasta perfis/
// 2. Adicionar o caminho na lista perfisImages acima
// 3. Pronto! A imagem aparecerá automaticamente na página de perfis

const DEFAULT_PROFILES = [
  {name: 'Vitor', image: '../../perfis/perfil-1.png'},
  {name: 'Gabriel', image: '../../perfis/perfil-2.png'},
  {name: 'Gui', image: '../../perfis/perfil-3.png'},
  {name: 'Maria', image: '../../perfis/perfil-4.png'}
];

// Lista de imagens que o usuário pode escolher ao criar um perfil.
// Agora carregamos automaticamente da pasta perfis!
let AVAILABLE_IMAGES = [];

// Aqui buscamos imagens para usar nos perfis.
// Agora detectamos automaticamente os arquivos na pasta perfis!
async function loadAvailableImages() {
  try {
    // Carregamos todas as imagens disponíveis
    AVAILABLE_IMAGES = getAllProfileImages();
    return AVAILABLE_IMAGES;
  } catch (error) {
    console.warn('Erro ao carregar imagens:', error);
    // Fallback para imagens padrão
    AVAILABLE_IMAGES = [
      '../../perfis/perfil-1.png',
      '../../perfis/perfil-2.png',
      '../../perfis/perfil-3.png',
      '../../perfis/perfil-4.png',
      '../../perfis/perfil-5.png'
    ];
    return AVAILABLE_IMAGES;
  }
}

// Seletores de elementos da página, que usamos para mexer no HTML.
const profilesList = document.getElementById('profiles-list');
const addProfileBtn = document.getElementById('add-profile');
const manageProfilesBtn = document.getElementById('manage-profiles');
const modal = document.getElementById('profile-modal');
const modalTitle = document.getElementById('modal-title');
const profileNameInput = document.getElementById('profile-name');
const imageOptions = document.getElementById('image-options');
const saveProfileBtn = document.getElementById('save-profile');
const cancelProfileBtn = document.getElementById('cancel-profile');

let profiles = [];
let manageMode = false;
let editingIndex = null;
let selectedImage = null;

// Desenha as opções de imagem na janela de criação/edição de perfil.
// Cada imagem aparece como um botão que o usuário pode clicar.
function renderImageOptions() {
  imageOptions.innerHTML = '';

  AVAILABLE_IMAGES.forEach((imageSrc, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = `image-option ${selectedImage === imageSrc ? 'selected' : ''}`;
    optionDiv.dataset.image = imageSrc;

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = `Opção ${index + 1}`;
    img.onerror = () => {
      img.src = '../../assets/perfil-1.png'; // Fallback
    };

    optionDiv.appendChild(img);
    optionDiv.addEventListener('click', () => selectImage(imageSrc));

    imageOptions.appendChild(optionDiv);
  });
}

// Quando o usuário clica em uma imagem, ela vira a imagem escolhida.
function selectImage(imageSrc) {
  selectedImage = imageSrc;
  document.querySelectorAll('.image-option').forEach(option => {
    option.classList.toggle('selected', option.dataset.image === imageSrc);
  });
}

// Carrega os perfis salvos no navegador, ou usa perfis padrão se não houver nada salvo.
function loadProfiles() {
  const saved = localStorage.getItem('devflix-profiles');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        profiles = parsed;
        return;
      }
    } catch (err) {
      console.warn('Falha ao carregar perfis do localStorage:', err);
    }
  }
  profiles = [...DEFAULT_PROFILES];
  saveProfiles();
}

function saveProfiles() {
  localStorage.setItem('devflix-profiles', JSON.stringify(profiles));
}

// Mostra todos os perfis na lista, criando os cards na tela.
function renderProfiles() {
  profilesList.innerHTML = '';

  profiles.forEach((perfil, index) => {
    const li = document.createElement('li');
    li.className = 'profile';
    li.dataset.index = index;

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = perfil.image;
    img.alt = `Perfil ${perfil.name}`;
    const caption = document.createElement('figcaption');
    caption.textContent = perfil.name;

    figure.appendChild(img);
    figure.appendChild(caption);
    li.appendChild(figure);

    if (manageMode) {
      const actions = document.createElement('div');
      actions.className = 'management-actions';

      const editNameBtn = document.createElement('button');
      editNameBtn.className = 'manage-btn edit-btn';
      editNameBtn.textContent = 'Editar Nome';
      editNameBtn.addEventListener('click', event => {
        event.stopPropagation();
        const newName = prompt('Novo nome para o perfil:', perfil.name);
        if (newName && newName.trim()) {
          profiles[index].name = newName.trim();
          saveProfiles();
          renderProfiles();
        }
      });

      const editImageBtn = document.createElement('button');
      editImageBtn.className = 'manage-btn edit-btn';
      editImageBtn.textContent = 'Mudar Imagem';
      editImageBtn.addEventListener('click', event => {
        event.stopPropagation();
        openModal(true, index);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'manage-btn delete-btn';
      deleteBtn.textContent = 'Excluir';
      deleteBtn.addEventListener('click', event => {
        event.stopPropagation();
        if (confirm(`Excluir perfil "${perfil.name}"?`)) {
          profiles.splice(index, 1);
          saveProfiles();
          renderProfiles();
        }
      });

      actions.appendChild(editNameBtn);
      actions.appendChild(editImageBtn);
      actions.appendChild(deleteBtn);
      li.appendChild(actions);
    }

    // Quando clicamos no perfil, salvamos o perfil ativo e vamos para o catálogo.
    li.addEventListener('click', () => {
      if (manageMode) return;
      localStorage.setItem('perfilAtivoNome', perfil.name);
      localStorage.setItem('perfilAtivoImagem', perfil.image);
      window.location.href = '../../pages/catalogo/index.html';
    });

    profilesList.appendChild(li);
  });
}

// Abre a janela para criar ou editar um perfil.
function openModal(isEdit = false, index = -1) {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  if (isEdit) {
    editingIndex = index;
    modalTitle.textContent = 'Editar perfil';
    profileNameInput.value = profiles[index].name;
    selectedImage = profiles[index].image;
  } else {
    editingIndex = null;
    modalTitle.textContent = 'Criar perfil';
    profileNameInput.value = '';
    selectedImage = AVAILABLE_IMAGES[0]; // Seleciona primeira imagem por padrão
  }

  renderImageOptions();
  profileNameInput.focus();
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  editingIndex = null;
  selectedImage = null;
  profileNameInput.value = '';
}

// Configura os botões e eventos da página de perfis.
async function initProfileControls() {
  await loadAvailableImages();

  addProfileBtn.addEventListener('click', () => openModal(false));

  manageProfilesBtn.addEventListener('click', () => {
    manageMode = !manageMode;
    manageProfilesBtn.textContent = manageMode ? 'Sair do modo gerenciar' : 'Gerenciar perfis';
    renderProfiles();
  });

  cancelProfileBtn.addEventListener('click', closeModal);

  saveProfileBtn.addEventListener('click', () => {
    const name = profileNameInput.value.trim();

    if (!name) {
      alert('Por favor, insira um nome para o perfil.');
      profileNameInput.focus();
      return;
    }

    if (!selectedImage) {
      alert('Por favor, selecione uma imagem para o perfil.');
      return;
    }

    if (editingIndex !== null && editingIndex >= 0) {
      profiles[editingIndex] = { name, image: selectedImage };
    } else {
      profiles.push({ name, image: selectedImage });
    }

    saveProfiles();
    renderProfiles();
    closeModal();
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
}

// Configura o botão de mudança de tema (claro/escuro).
function initTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');

  const applyTheme = theme => {
    if (theme === 'light') {
      body.classList.add('light');
      toggleBtn.classList.add('light-mode');
      toggleBtn.classList.remove('dark-mode');
      toggleBtn.textContent = 'Modo Escuro';
    } else {
      body.classList.remove('light');
      toggleBtn.classList.add('dark-mode');
      toggleBtn.classList.remove('light-mode');
      toggleBtn.textContent = 'Modo Claro';
    }
    localStorage.setItem('devflix-theme', theme);
  };

  const savedTheme = localStorage.getItem('devflix-theme');
  applyTheme(savedTheme || 'dark');

  toggleBtn.addEventListener('click', () => {
    applyTheme(body.classList.contains('light') ? 'dark' : 'light');
  });
}

// Quando a página carrega, inicializamos tudo.
window.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  loadProfiles();
  await initProfileControls();
  renderProfiles();
});
