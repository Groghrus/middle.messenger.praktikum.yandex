const template = `
<div class="main">
  <div class="chat">
    {{{panel}}}
    <div class="users-list">
      {{{createChatButton}}}
      {{{chatList}}}     
    </div>
  </div>
  <div class="space">
    
    
        <div class="dialog">
          {{{dialogHeader}}}
          {{{popUpMenu}}}
          <div class="dialog-main">
              <div class="text-grey text-12-500 text-align-c">{{date}}</div>
              <div class="dialog-main__messages">
                {{{plug}}}               
                {{{messagesListAll}}}  
              </div>  
          </div>            
          {{{dialogFooter}}}      
        </div>       
  </div>
  {{{ modalCreateChat }}}  
  {{{ modalAddUser }}}  
  {{{ modalDelUser }}}  
  {{{ modalAddAvatarToChat }}}  
  </div>  
`;

export default template;
