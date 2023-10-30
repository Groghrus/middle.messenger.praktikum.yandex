// обертка кнопок ссылкой временная, до реализации роутинга
export default `
{{#if aWrap}}
  <a href="{{src}}"><button class="{{className}}">{{title}}</button></a>
{{/if}} 
{{#if btnWrap}}
  <button class="{{className}}">{{title}}</button>
{{/if}}
`
