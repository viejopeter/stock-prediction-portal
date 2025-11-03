
import {useEffect} from "react";
import axiosInstance from "../../axiosInstance.js";

const Dashboard = () => {

    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {

        const fetchProtectedData = async () => {

            try{

                const response = await axiosInstance.get('/protected-view',{
                    headers:{
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                console.log('Success: ', response.data)
            }catch(error){

                console.error('Error fetching data:', error)

            }
        }

        fetchProtectedData()
    }, []);

    return (
        <>
            <div className="text-light">
                Welcome to the dashboard
            </div>
        </>
    )
}

export default  Dashboard