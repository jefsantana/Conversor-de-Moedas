
# 💱 Conversor de Moedas

Projeto de **Conversor de Moedas** desenvolvido com **HTML, CSS e JavaScript**, que permite converter valores em **Real (BRL)** para **Dólar (USD)**, **Euro (EUR)** e **Libra Esterlina (GBP)** de forma simples e intuitiva.

---

## 📸 Preview do Projeto

> Interface amigável com seleção de moeda, exibição de bandeiras e conversão em tempo real.

---

## 🚀 Funcionalidades

* ✅ Conversão de **Real (BRL)** para:

  * Dólar Americano (USD)
  * Euro (EUR)
  * Libra Esterlina (GBP)
* ✅ Conversão ao clicar no botão
* ✅ Conversão ao pressionar **Enter** no teclado
* ✅ Formatação de moeda usando `Intl.NumberFormat`
* ✅ Atualização dinâmica:

  * Nome da moeda
  * Imagem (bandeira)
* ✅ Código organizado e fácil de entender

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

---

## 📂 Estrutura do Projeto

```
📦 conversor-de-moedas
├── 📁 assets
│   ├── dolar.png
│   ├── euro.png
│   └── libra.png
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ Como Funciona a Conversão

As taxas são fixas no código (podendo ser facilmente substituídas por uma API no futuro):

```javascript
const dolarToday = 5.40
const euroToday = 6.33
const libraToday = 7.28
```

A conversão é feita dividindo o valor digitado pela cotação da moeda selecionada.

---

## ⌨️ Atalhos

* Pressione **Enter** no campo de input para converter automaticamente
* Alterar a moeda no `select` atualiza o valor instantaneamente

---

## 🎯 Melhorias Futuras (Sugestões)

* 🔄 Integração com API de câmbio em tempo real
* 📱 Responsividade aprimorada para mobile
* 🌙 Modo escuro
* 🧮 Conversão entre múltiplas moedas (não apenas BRL)

---

## 👨‍💻 Autor

**Jeferson Santana**
📌 Desenvolvedor Web
📚 Estudante de Análise e Desenvolvimento de Sistemas

🔗 [LinkedIn](https://www.linkedin.com/in/jeferson-santana-machado/)

---


