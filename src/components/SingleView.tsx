import {MediaItem} from '../types/DBTypes';

const SingleView = (props: {
  item: MediaItem | null;
  setSelectedItem: (item: MediaItem | null) => void;
}) => {
  const {item, setSelectedItem} = props;
  return (
    <dialog>
      <h3>{item?.title}</h3>
      <img src={item?.thumbnail} alt={item?.title} />

      <p>{item?.title}</p>
      <p>{item?.description}</p>
      <p>{new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>{item?.filesize}</p>
      <p>{item?.media_type}</p>
    </dialog>
    // TODO: Add JSX for displaying a mediafile here
    // - use e.g. a <dialog> element for creating a modal
    // - use item prop to render the media item details
    // - use img tag for displaying images
    // - use video tag for displaying videos
  );
};
export default SingleView;
