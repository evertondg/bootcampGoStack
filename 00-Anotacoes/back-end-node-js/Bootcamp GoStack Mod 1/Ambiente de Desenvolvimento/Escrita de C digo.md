# Escrita de Código

# VSCode

- Instalar do site oficial;
- Extensões: Dracula e Material Icon Theme;
- Configure o VsCode para ficar ao seu gosto;
- Instalar Fonte "Fira Code".

## Terminal Oh my Zsh

- Use Linux ou Mac ( Afinal é o mesmo ambiente que vai hospedar sua aplicação );
- Se for usar o windows, instale o terminal do ubuntu no windows;
- Instale o Oh my Zsh [Oh my Zsh](https://ohmyzsh.sh/);
- Instale o [SpaceShip Prompt](https://github.com/denysdovhan/spaceship-prompt)
- Siga as instruções do passo a passo [Rocketseat](https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/), para instalar os plugins.

## Git & Github

- Instale e Configure o [GIT](https://git-scm.com/);
    - Faça o git config global do [user.name](http://user.name/) e do user.email (veja documentação);
- Instale o app do [Github](https://github.com/);
- Vá até sua pasta de usuário (use no linux: cd ~) e abra o arquivo .gitconfig, e insira estas configurações :

    ```
      [alias]
      ci = commit
      co = checkout
      cm = checkout master
      cb = checkout -b
      st = status -sb
      sf = show --name-only
      lg = log --pretty=format:'%Cred%h%Creset %C(bold)%cr%Creset %Cgreen<%an>%Creset %s' --max-count=30
      incoming = !(git fetch --quiet && git log --pretty=format:'%C(yellow)%h %C(white)- %C(red)%an %C(white)- %C(cyan)%d%Creset %s %C(white)- %ar%Creset' ..@{u})
      outgoing = !(git fetch --quiet && git log --pretty=format:'%C(yellow)%h %C(white)- %C(red)%an %C(white)- %C(cyan)%d%Creset %s %C(white)- %ar%Creset' @{u}..)
      unstage = reset HEAD --
      undo = checkout --
      rollback = reset --soft HEAD~1

    ```

## Extensões do Chrome

- JSON Viewer;
- React Dev Tools;
- Octotree.

## Ferramentas

- [Notion](https://www.notion.so/) - Anotações;
- [Whimscall](https://whimsical.com/) - Mapas mentais e organogramas;
- DevDocs [Web](notion://www.notion.so/devdocs.io) ou [Desktop](notion://www.notion.so/devdocs.egoist.moe);
- [Insomnia](https://insomnia.rest/).