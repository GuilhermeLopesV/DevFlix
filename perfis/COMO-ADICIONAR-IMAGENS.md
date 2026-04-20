# Como Adicionar Novas Imagens aos Perfis

## Método Mais Fácil (Recomendado):
Abra o arquivo `scripts/profile-images.js` e adicione o caminho da sua imagem na lista `perfisImages`.

## Exemplo:
```javascript
export const perfisImages = [
  '../../perfis/perfil-carro.jpg',
  '../../perfis/perfil-2.jpg',
  '../../perfis/perfil-3.jpg',
  '../../perfis/perfil-novo.png',
  '../../perfis/minha-nova-imagem.jpg'  // ← SUA NOVA IMAGEM AQUI
];
```

## Método Alternativo:
Se preferir, ainda pode editar diretamente no arquivo `scripts/perfis.js`, mas o método acima é mais organizado.

## Passos completos:
1. **Coloque a imagem** na pasta `perfis/`
2. **Abra** `scripts/profile-images.js`
3. **Adicione** o caminho: `'../../perfis/sua-imagem.jpg'`
4. **Salve** e teste!

## Dicas:
- Use imagens quadradas para melhores resultados
- Formatos: JPG, PNG, GIF
- Nomes simples funcionam melhor