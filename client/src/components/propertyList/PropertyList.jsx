import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://media.istockphoto.com/id/1141951033/photo/luxury-bedroom-interior.jpg?s=612x612&w=0&k=20&c=As_kym3CEkAVqB9NZHoXiEciWPMo1SRUO0YXLSTTiME=",
    "https://img.freepik.com/premium-photo/modern-luxury-interior-with-panoramic-windows-nature-view-stone-floor-white-wall-wooden-ceiling-minimal-apartment-design-dining-living-room-with-night-lighting-3d-render-illustration_370638-140.jpg",
    "https://c4.wallpaperflare.com/wallpaper/794/447/744/luxury-island-maldives-rangali-wallpaper-preview.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://a0.muscache.com/pictures/c29e1101-8f81-4de7-9194-fa6534d960a7.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
