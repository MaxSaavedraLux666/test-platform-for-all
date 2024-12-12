import './Forum.css';
import useForumData from '../../hooks/manage-forum/forumDataHook';
import { Link } from 'react-router-dom';

function Forum() {
    const { forums, loading, error } = useForumData();

    if (loading) return <div>Cargando foros...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="mainforo">
            <div className="filtro">
                <div className="filterby">
                    <select name="category" id="select-forum">
                        <option value="">Todas las Categorías</option>
                        <option value="Historia">Historia</option>
                        <option value="Filosofía">Filosofía</option>
                    </select>
                </div>
                <div className="fieldsearch">
                    <input type="text" placeholder="Buscar foros..." />
                </div>
                <div className="newforo">
                    <button>Nuevo Foro</button>
                </div>
            </div>
            <div className="forums">
                {forums.map((forum) => (
                    <Link to={`/forum/${forum.id}`} key={forum.id} className="rowforum">
                        <div className="coverforum">
                            <img src={forum.cover} alt="Portada del Foro" />
                        </div>
                        <div className="descriptionforum">
                            <h2>{forum.title}</h2>
                            <p>{forum.description}</p>
                            <div className="tags">
                                {forum.tags.map((tag) => ( 
                                    <span key={tag.id} className="tag">
                                        #{tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="authorforum">
                            <div className="profile">
                                <img src={forum.profileImage} alt="Perfil" />
                                <span>{forum.author}</span>
                            </div>
                            <div className="datepublication">{forum.timeAgo}</div>
                            <div className="obra">
                                <div className="titlebook">{forum.bookTitle}</div>
                                <div className="authorbook">{forum.bookAuthor}</div>
                            </div>
                        </div>
                        <div className="commits">
                            <span>{forum.comments} Comentarios</span>
                            <span>{forum.views} Vistas</span>
                            <span>{forum.category}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="pagination">
                <button>Anterior</button>
                <span>1</span>
                <button>Siguiente</button>
            </div>
        </div>
    );
}

export default Forum;