import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import {MediaItem, MediaItemWithOwner} from '../types/DBTypes';
import {fetchData} from '../lib/functions';

const Home = () => {
  const [mediaArray, setMediaArray] = useState<MediaItem[]>([]);
  const getMedia = async () => {
    try {
      const data = await fetchData<MediaItem>(
        import.meta.env.VITE_MEDIA_API + '/media',
      );

      const dataWithOwner: MediaItemWithOwner = await Promise.all(
        data.map((item) => {
          const username = fetchData(
            import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
          );
          const ItemWithOwner: MediaItemWithOwner = {username, ...item};
          // TODO: fix this  !!!
        }),
      );

      setMediaArray(data);
      console.log(data);
    } catch (error) {
      console.error('getMedia failed', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
