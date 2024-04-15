import { MutatingDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#750e21"
        secondaryColor="#750e21"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
