import { Player } from './Player';

export function Detail(props) {
  const { song } = props;

  return (
    <div className="p-10 text-center">
      <div className="my-4 text-2xl font-bold">
        {song.artist} {song.name}
      </div>
      <pre>{song.lyrics}</pre>
      <Player spotifyUrl={song.link} />
    </div>
  );
}
