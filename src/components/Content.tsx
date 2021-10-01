
interface ContentProps{
selectedGenre: string;
children: any;
}
export function Content(props:ContentProps) {
  // Complete aqui
return(
  <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenre}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.children}
          </div>
        </main>
      </div>)
}