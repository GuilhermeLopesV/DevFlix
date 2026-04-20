# Pasta de Perfis - DevFlix

Esta pasta contém as imagens disponíveis para seleção de perfis no DevFlix.

## Como adicionar novas imagens de perfil:

### Método Fácil (Recomendado):
1. **Adicione suas imagens** nesta pasta `perfis/`
2. **Edite o arquivo** `scripts/perfis.js`
3. **Adicione o caminho da nova imagem** na lista `perfisImages` (linha ~8)
4. **Exemplo**:
   ```javascript
   const perfisImages = [
     '../../perfis/perfil-carro.jpg',
     '../../perfis/perfil-2.jpg',
     '../../perfis/perfil-3.jpg',
     '../../perfis/minha-nova-imagem.jpg'  // ← Adicione aqui!
   ];
   ```

### Detalhes técnicos:
- **Formatos suportados**: JPG, PNG, GIF, WebP
- **Tamanho recomendado**: 200x200px ou quadradas
- **Caminho**: Use `../../perfis/nome-do-arquivo.extensao`
- **Nomeie os arquivos** de forma descritiva

## Imagens atuais disponíveis:
- `perfil-carro.jpg` - Imagem de carro esportivo
- `perfil-2.jpg` - Segundo perfil disponível
- `perfil-3.jpg` - Terceiro perfil disponível
- `perfil-novo.png` - Nova imagem adicionada

## Como funciona:
- As imagens são carregadas automaticamente do array `perfisImages` no arquivo JavaScript
- Usuários podem clicar para selecionar qualquer imagem disponível no modal de criação/edição
- Sistema totalmente integrado - não requer recarregar a página

## Dica:
Para adicionar uma nova imagem, simplesmente:
1. Coloque o arquivo na pasta `perfis/`
2. Adicione o caminho no array `perfisImages` em `scripts/perfis.js`
3. Pronto! A imagem aparecerá automaticamente como opção de perfil.