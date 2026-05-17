# Guia de Customização

## 🎨 Alterar Cores

Edite o arquivo `css/variables.css`:

```css
:root {
  --neon:  #00c6ff;  /* ← troque pelo azul desejado */
  --neon2: #0072ff;
  --black: #080810;
}
```

---

## 📝 Alterar Textos

Todos os textos estão em `index.html`. Basta pesquisar (Ctrl+F) pelo trecho
que deseja editar e substituir diretamente.

### Exemplos rápidos

| O que mudar          | Onde procurar no HTML              |
|----------------------|------------------------------------|
| Slogan do hero       | `"Transforme seu corpo"`           |
| Número do WhatsApp   | `5511956677257` (aparece 12 vezes) |
| Endereço             | `R. Manuel Lopes, 170`             |
| Horários             | Seção `footer-col` com "Horários"  |
| Depoimentos          | Tags `<div class="testimonial-card">` |

---

## 🖼️ Trocar Imagens

As imagens atuais são do Unsplash (placeholder). Para usar fotos reais:

1. Coloque as fotos na pasta `images/`
2. No `index.html` e `css/sections.css`, substitua as URLs do Unsplash pelo
   caminho relativo:

```html
<!-- Antes -->
background: url('https://images.unsplash.com/photo-xxx?w=1800')

<!-- Depois -->
background: url('images/foto-academia.jpg')
```

### Tamanhos recomendados

| Imagem            | Tamanho sugerido |
|-------------------|-----------------|
| Hero background   | 1920 × 1080 px  |
| Galeria (grande)  | 1200 × 675 px   |
| Galeria (normal)  | 800 × 600 px    |
| Sobre (principal) | 800 × 600 px    |
| Sobre (pequena)   | 400 × 400 px    |
| Instagram grid    | 400 × 400 px    |

---

## 📱 Adicionar Nova Seção

1. Crie o HTML da seção em `index.html`
2. Adicione os estilos em `css/sections.css`
3. Se precisar de comportamento JS, crie `js/nova-secao.js` e importe no
   final do `index.html`

---

## 🗺️ Atualizar o Google Maps

1. Acesse [Google Maps](https://maps.google.com)
2. Pesquise o endereço da academia
3. Clique em **Compartilhar → Incorporar um mapa**
4. Copie o código `<iframe>` gerado
5. Substitua o `<iframe>` dentro de `.map-wrapper` no `index.html`
