const loading = () => {
  return (
    <>
      <div className="max-h-md m-10 mx-auto max-w-2xl max-w-6xl rounded-md border border-gray-300 p-4 shadow">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-40 w-full rounded bg-gray-400"></div>
            <div className="space-y-2">
              <div className="h-4 rounded bg-gray-400"></div>
              <div className="h-4 w-5/6 rounded bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loading;
