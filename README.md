# **OrgsHook**

-Eu comecei produzindo o componente Topo, utilizando estilos diferentes para cada Texto e imagem disponíveis, a fim de controlar essas partes separadamente. Depois, criei um Mock para simular uma API e aprender a me comunicar com ela sem precisar utilizar um serviço externo de fato.

-Em seguida, aprendi a criar um estado para acompanhar mudanças nos dados externos e renderizar na tela essas mudanças. Utilizei os Hooks, uma nova adição do React Native, para modificar a lista de produtores do app Orgs e aplicar o Hook de useState para criar um estado nessa lista.

-Para criar uma lista de produtores, renderizei os textos com o renderItem e adicionei imagens com um accessibilityLabel para permitir que pessoas cegas possam usar o app. Estilizei a lista com cores, margens, borda arredondada, alinhamento, distância, tamanho da fonte e sombra no cartão.

-Adicionei as estrelas para classificar os produtores no app, criando um componente próprio com propriedades como quantidade e tamanho, aplicando estilos de tamanho e largura condicionais em função dessas propriedades. Refatorei o código das estrelas para diminuir seu tamanho.

-Também aprendi a criar um Hook personalizado para o nosso aplicativo, para facilitar a reutilização da função em outros pontos do código. Utilizei o useReducer para simplificar lógicas extensas e o useMemo para escolher os estados que vão ser atualizados de acordo com o método, melhorando a performance do aplicativo.

## Exemplo do projeto


![qemu-system-x86_64_zZtkR9CnXu](https://user-images.githubusercontent.com/87025218/228692096-aa1e4070-ede8-47ef-b928-1d5e9edb6b00.gif)
