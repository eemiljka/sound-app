import {MediaItem} from '../types/DBtypes';

const MediaRow = (props: {mediaItem: MediaItem; setSelectedItem}) => {
  const item = props.mediaItem;
  const setSelectedItem = props.setSelectedItem;
  props.setSelectedItem;
  return (
    <tr className="media-row">
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <button
          onClick={() => {
            setSelectedItem(item);
          }}
        >
          Views
        </button>
      </td>
    </tr>
  );
};

export default MediaRow;
