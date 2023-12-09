const template = ` 
 {{#if headerShow }}   
    <div class="dialog-header__info">
      <div class="profile-avatar">
          <div class="profile-avatar__img header-position">        
            <img class="avatar avatar-header" src="{{ avatar }}" alt="ava"/>      
          </div>  
      </div>
      <div class="text-14-500 text-dark">{{userName}}</div>
    </div> 
    {{{buttonMenu}}} 
 {{/if }}   
`;

export default template;
