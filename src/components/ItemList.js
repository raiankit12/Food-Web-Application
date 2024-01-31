import { CDN_URL } from "../utils/constants";

const ItemList = ({ item }) => {
  // const {title}=props; ///accordian

  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-grey-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultprice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 bg-black text-white shadow-lg bottom-4 mx-16 rounded-lg">
                Add +
              </button>
            </div>
            <img
              src={
                CDN_URL + item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : CDN_URL + item.card.info.cloudinaryImageId
              }
            />
          </div>
        </div>

        //className="w-9/12"
      ))}
    </div>
  );
};

export default ItemList;
