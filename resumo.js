document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('menuToggle'); // Botão de toggle do menu
const navLinks = document.getElementById('navLinks'); // Links de navegação
const scrollToTopButton = document.getElementById('scrollToTop');
    
    
    // Adiciona o evento de clique no botão de toggle do menu
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'show' para mostrar ou ocultar os links de navegação
        navLinks.classList.toggle('show');
    });

 // Mostra ou esconde o botão de rolagem para o topo
   window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block'; // Mostra o botão
    } else {
        scrollToTopButton.style.display = 'none'; // Esconde o botão
    }
});

// Adiciona um evento de clique para rolar para o topo
scrollToTopButton.addEventListener('click', function(e) {
 e.preventDefault(); // Previne o comportamento padrão do link
 window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo
});

});
let currentLanguage = 'en'; // Idioma atual
 // Objetos de texto para tradução
 const texts = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        title: "Summary",
        content: "Hi!I am a front-end developer in training, passionate about creating responsive and interactive websites that truly make a difference for users. My journey in web development began in May 2024, and since then, I have been diving deep into technologies like HTML5, CSS3, and JavaScript. Additionally, I have gained solid knowledge in Tailwind CSS, a utility-first framework that allows me to build fast and elegant interfaces, and React, a powerful library for creating dynamic and scalable user interfaces. Recently, I started working with TypeScript, which helps me write more secure and maintainable code. I also use tools like Git and GitHub to organize my projects and collaborate with other developers. I have consistently sought ways to improve the quality and performance of the code I produce, always focusing on best practices and refactoring to make my projects more efficient and sustainable in the long run. In more recent projects, I’ve been exploring Redux and Next.js, which have allowed me to build even more robust and optimized web applications while expanding my knowledge of the React ecosystem. I am also starting to explore automated testing with Jest and React Testing Library, which has been crucial in ensuring that my projects are reliable and bug-free. I am constantly challenging myself to improve my skills in creating responsive and accessible interfaces that work seamlessly across all devices. Currently, I am deepening my knowledge in advanced JavaScript and studying the fundamentals of UX/UI design to offer even better experiences for users. In 2025, I will begin my degree in Computer Systems Analysis, which will help me consolidate my knowledge and specialize in web development. I am very grateful to my first mentor, Professor Gabriel Salvador, who played a key role in motivating me to take the first steps in this field. With my passion for technology, games, and dogs, I continue to create dynamic and empathetic interfaces. I am excited about the future and ready to take on new challenges as I keep learning and evolving. My goal is to become a skilled front-end developer, building accessible, impactful, and useful projects. Let's build something amazing together!",
        figma:"Renan Naves 2024 - Layout inspired  by Figma templates",
    },
    pt: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
        title: "Resumo",
        content: "Olá! Sou um desenvolvedor front-end em formação, apaixonado por criar sites responsivos e interativos que realmente façam diferença para os usuários. Minha jornada no desenvolvimento web começou em maio de 2024, e desde então, venho me aprofundando em tecnologias como HTML5, CSS3 e JavaScript. Além disso, desenvolvi conhecimento sólido em Tailwind CSS, um framework utilitário que me permite criar interfaces rápidas e elegantes, e em React, uma biblioteca poderosa para construção de interfaces dinâmicas e escaláveis. Recentemente, comecei a trabalhar com TypeScript, que tem me ajudado a escrever código mais seguro e de fácil manutenção. Também utilizo ferramentas como Git e GitHub para organizar meus projetos e facilitar a colaboração com outros desenvolvedores. Tenho buscado constantemente maneiras de melhorar a qualidade e a performance do código que produzo, buscando sempre boas práticas e refatorações que tornem os projetos mais eficientes e sustentáveis a longo prazo. Em projetos mais recentes, estou explorando Redux e Next.js, o que tem me permitido criar aplicações web ainda mais robustas e otimizadas, além de me aprofundar mais no ecossistema React. Também estou começando a explorar testes automatizados com Jest e React Testing Library, o que tem sido essencial para garantir que meus projetos sejam confiáveis e livres de bugs. Estou constantemente me desafiando a melhorar minhas habilidades na criação de interfaces responsivas e acessíveis, que funcionem bem em dispositivos de todos os tamanhos. Atualmente, estou aprofundando meus conhecimentos em JavaScript avançado e estudando os fundamentos de UX/UI design para oferecer experiências ainda melhores aos usuários. Em 2025, iniciarei o curso de Análise de Sistemas, o que me ajudará a consolidar meus conhecimentos e alcançar meu sonho de me especializar em desenvolvimento web. Sou muito grato ao meu primeiro mentor, o professor Gabriel Salvador, que foi fundamental para me motivar a dar os primeiros passos nesse mundo. Com meu amor por tecnologia, jogos e cachorros, sigo criando interfaces dinâmicas e empáticas. Estou animado com o futuro e pronto para enfrentar novos desafios enquanto continuo aprendendo e evoluindo. Meu objetivo é me tornar um desenvolvedor front-end capacitado, criando projetos acessíveis, impactantes e úteis. Vamos construir algo incrível juntos!",
        figma: "Renan Naves 2024 - Layout inspirado por templates do Figma"
    }
};



// Função para alternar o idioma
function toggleLanguage() {
    if (currentLanguage === 'en') {
        currentLanguage = 'pt'; // Muda para português
        document.getElementById('home').textContent = texts.pt.home;
        document.getElementById('about').textContent = texts.pt.about;
        document.getElementById('projects').textContent = texts.pt.projects;
        document.getElementById('contact').textContent = texts.pt.contact;
        document.getElementById('title').textContent = texts.pt.title;
        document.getElementById('content').textContent = texts.pt.content;
        document.getElementById('figma').textContent = texts.pt.figma;
        document.getElementById('ptImage').style.display = 'none'; // Esconde a imagem PT
        document.getElementById('enImage').style.display = 'inline'; // Mostra a imagem EN
    } else {
        currentLanguage = 'en'; // Muda para inglês
        document.getElementById('home').textContent = texts.en.home;
        document.getElementById('about').textContent = texts.en.about;
        document.getElementById('projects').textContent = texts.en.projects;
        document.getElementById('contact').textContent = texts.en.contact;
        document.getElementById('title').textContent = texts.en.title;
        document.getElementById('content').textContent = texts.en.content;
        document.getElementById('figma').textContent = texts.en.figma;
        document.getElementById('ptImage').style.display = 'inline'; // Mostra a imagem PT
        document.getElementById('enImage').style.display = 'none'; // Esconde a imagem EN
    }
}



        


