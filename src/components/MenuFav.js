import './MenuFav.scss';

function MenuFav() {
    return (
        <div className="MenuCont">
            <div className="MenuBtns">
                Favoritos
                <div className="MenuIcon" id="MenuBookmark"></div>
            </div>
            <div className="MenuBtns">
                Agregar
                <div className="MenuIcon" id="MenuAgregar"></div>
            </div>
        </div>
    );
}
  
export default MenuFav;