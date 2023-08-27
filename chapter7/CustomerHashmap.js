import _ from "lodash";

// 7.1
let customerData = {
  1920: {
    name: "마틴 파울러",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
  38673: {
    name: "닐 포드",
    id: "38673",
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
};

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}

export function compareUsage(customerID, laterYear, month) {
  // const later = getCustomerData().usage(customerID, laterYear, month);
  // const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier =
    getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData._data;
}

export function setRawDataOfCustomer(arg) {
  customerData = new CustomerData(arg);
}
