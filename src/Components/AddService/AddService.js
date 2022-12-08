import React from "react";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const topicName = e.target.topicName.value;
    const topicDesc = e.target.about.value;
    const topicpic = e.target.topicpic.value;
    const topicprice = e.target.price.value;
    const addservice = { topicName, topicprice, topicDesc, topicpic };

    // console.log(topicName, topicDesc, topicpic, topicprice);
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ addservice }),
    });
  };
  return (
    <div className="px-10">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Service adding form
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Add Service according to your requirements
            </p>
          </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleSubmit}>
            <div class="shadow sm:overflow-hidden sm:rounded-md">
              <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="topicName"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Service Name
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="topicName"
                        required
                        id="topicName"
                        class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Wild photography"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="price"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Service Price
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="price"
                      name="price"
                      required
                      rows="3"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Service Price"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Service Description
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      required
                      rows="3"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Service Description"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Service Cover photo
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="topicpic"
                      required
                      id="topicpic"
                      class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Wild animal picture link"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
