const template = `
    <form class="profile-page__fields">
      {{{ avatarProfile }}}
      <div class="top">
        {{{ email }}}            
        {{{ login }}}            
        {{{ firstName }}}            
        {{{ secondName }}}            
        {{{ displayName }}}
        {{{ phone }}}
        {{{ oldPassword }}}            
        {{{ newPassword }}}            
        {{{ newPasswordRepeat }}}  
      </div>
      <div class="bottom">
      {{{ buttons }}}
      </div>            
    </form>   
`;

export default template;
