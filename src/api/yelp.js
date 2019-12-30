import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer DWtR2VRhoOUNiSzXc6MH6NGsAHb65k6AbutL0xG0s_dQS044dyBDdx5gz2VsG8szQPtsc5IO-m_ke23UlmWFlOa_VXFBx1Lq6-MwErqdkAT4yeVsILay9WIocQEKXnYx'
    }
})