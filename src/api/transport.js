import axios from "axios";
import { baseUrl } from "../util/constants";

const Transport = {
  HTTP: {
    createPassportRequest: (data) =>{
      const accessToken = sessionStorage.getItem('access_token');
      return axios({
        url: baseUrl + "passport/applicant/create-applicant",
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        data,
      });
    },

    createVisaRequest: (data) =>{
      const accessToken = sessionStorage.getItem('access_token');
      return axios({
        url: baseUrl + "visa/visa/applicant",
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        data,
      });
    },

      updatePassportRequest: (data,applicationNumber) =>{
        const accessToken = sessionStorage.getItem('access_token');
        return axios({
          url: baseUrl + "passport/applicant/update-applicant/"+applicationNumber,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          data,
        });
      },
  
    updateVisaRequest: (data,applicationNumber) =>{
      const accessToken = sessionStorage.getItem('access_token');
      return aaxios({
          url: baseUrl + "visa/visa/update-applicant/"+applicationNumber,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          data,
        });
    },
    checkPaid: (trxRef) =>{
      const accessToken = sessionStorage.getItem('access_token');
      return axios({
          url: baseUrl + "payment/payment/verify/"+trxRef,
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          }
        });
    },
    signUp: async (data) =>
      axios({
        url: baseUrl + "auth/auth/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data,
    }),

    login: async (data) => {
      const accessToken = sessionStorage.getItem('access_token');
      return axios({
        url: baseUrl + "auth/auth/login",
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        data,
      });
    },
      viewPassportApplication: (data) => {
        const accessToken = sessionStorage.getItem('access_token');
        return axios({
          url: baseUrl + "passport/applicant/getApplications",
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          data,
        });
      },
    userdetails: async (data) => {
      const accessToken = sessionStorage.getItem('access_token');
      return axios({
        url: baseUrl + "auth/auth/user-details",
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
        data,
      });
    },

      uploadPassportImages: (data) =>
      axios({
        url: "http://localhost:8002/upload/upload",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
      },
      data: data,
      }),

      uploadPassportViditure: (data) => axios({
        url: "http://localhost:8002/upload/upload_viditure",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        data: data,
      }),


    getNotifications: (data) =>
      axios({
        url: baseUrl + "notification/notification/list",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      }),
  },
};

export default Transport;