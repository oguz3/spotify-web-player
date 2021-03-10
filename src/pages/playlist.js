import { PLAYLIST } from "../data/index";

function PlaylistPage({ match }) {
	const {
		params: { path },
	} = match;

	return (
		<div>
			{PLAYLIST.map((item) => {
                if(item.link == path){
                    return (
                        <div>
                            <p>Playlist Adı: {item.title}</p>
                            <img src={item.imgUrl} />
                        </div>
                    );
                }
			})}
		</div>
	);
}

export default PlaylistPage;
