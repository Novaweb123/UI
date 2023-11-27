
import {useState} from "react"
import {useDispatch} from "react-redux"
import {useLocation, useNavigate, useParams} from "react-router-dom"
import {toast} from "react-toastify"
import {DEFAULTFILTERS, DEFAULT_PAGE_COUNT, TEMP_DEFAULTFILTERS} from "../../constants/app.constants"
import useHttpHandler from "../../hooks/httphandler.hook"
import axios from "axios"
import { isEmptyArray } from "formik"
const useCommonHooks = () => {

    const [membersList, setMemberData] = useState(null)
    const {post} = useHttpHandler()
    const [loading, setLoading] = useState(false)
    const [dropdownsData, setDropdownsData] = useState(null)
    const [tableData, setTableData] = useState([])
    const [serviceData, setCustomData] = useState(null)
    const [addServiceData, setAddServiceData] = useState(null)
    const [data, setData] = useState(null)
    const dispatch = useDispatch()
    const location = useLocation()
    const {userId} = useParams();
    const navigate = useNavigate();


    const getCurrentMonth=()=>{
        const current = new Date();
        return current.getMonth()+1;
    }
    const getCurrentYear=()=>{
        const current = new Date();
        return current.getFullYear();
    }
    /*    const getListType = ()=> {
            const urlPath = location.pathname
            console.log(urlPath);

            if(urlPath === '/video-management/video-category/add-topic-list') {
             return 'admin_create_video_categoy'
            } else if(urlPath === '/video-management/video-category/topic-list' || urlPath ==='/video-management/video-category/' ) {
                return 'admin_video_category'
            } else if(urlPath === '/video-management/video-category/subtopic-list') {
             return 'admin_video_sub_category'
            }
        }
    */

    const getMemberList = (usertype) => {
        setLoading(true)
        let postData = {};
        postData.usertypeid = usertype;

        post('admin_get_members_ids', postData).then((res) => {
            setLoading(false)
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                let memberOptions = [];
                data?.map((item, index) => {
                    memberOptions.push({value: item.userid, label: item.id})
                })
                setMemberData({
                    memberOptions
                })
            }
        }).catch(() => setLoading(false))
    }

    const setkeys_params = (type) => {
        Object.keys(DEFAULTFILTERS).forEach(key => {
            delete DEFAULTFILTERS[key];
        })
        let obj = Object.keys(TEMP_DEFAULTFILTERS);
        obj.forEach((element, index) => {

            DEFAULTFILTERS[element] = TEMP_DEFAULTFILTERS[obj[index]];
        });
        if (type == "userId") {
            DEFAULTFILTERS.userid = userId;
        }
    }



    const promiseService = (postData) => {
       
        return new Promise((resolve, reject) => {
            //setLoading(true)
        
             post(postData.uri, postData).then((res) => {
                console.log(res);
                const status = res.data.status
                const data = res.data.data
                //setLoading(false)
                resolve(res);
             
            }).catch(() => {
                //setLoading(false)
                reject();
            }
            )

        });
      };


    const getDropDowns = async () => {
        setLoading(true)

      

        await post('getDropDowns',{"type": "getDropDowns"}).then((res) => {
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                let locationOptions = []
                let suppliersOptions = []
                let currencyOptions = [];
                let itemOptions = [];
                let brands = [];
                let product_category = [];
                let statecodes = [];
                let account_type = [];
                let gst =  [
                    {value: 0, label:"GST 0"},
                    {value: 5, label:"GST 5"},
                    {value: 12, label:"GST 12"},
                    {value: 18, label:"GST 18"},
                    {value: 28, label:"GST 28"},
                ]

               
                
                let channel_ids = data?.channel_ids;
                data?.locations.map((item, index) => {
                    locationOptions.push({value: item.LocationId, label: item.LocationName})
                })
                data?.suppliers.map((item, index) => {
                    suppliersOptions.push({value: index + "", label: item.Supplier_Name})
                })
                data?.currency.map((item, index) => {
                    currencyOptions.push({value: item.CurrencyId, label: item.Currency + "  -  " + item.Country })
                })
                /*data?.item_master.map((item, index) => {
                    itemOptions.push({value: index + "", label: item.Item_name  })
                })*/
                data?.brands.map((item, index) => {
                    brands.push({value: item.idno, label: item.Brand  })
                })
                data?.product_category.map((item, index) => {
                    product_category.push({value: item.idno, label: item.Product_Category  })
                })
                data?.state_codes.map((item, index) => {
                    statecodes.push({value: item.idno, label: item.statecode  })
                })
                data?.account_types.map((item, index) => {
                    account_type.push({value: index, label: item.account_type  })
                })

               
                

                
                

                setDropdownsData({
                    locationOptions,
                    suppliersOptions,
                    currencyOptions,
                    data,
                    brands,
                    product_category,
                    statecodes,
                    itemOptions,
                    gst,
                    account_type,
                    channel_ids
                    
                    
                })
            } else {
                toast.error(status.msg)
            }
            setLoading(false)
        })
    }

    let addDefaultVals = (values) => {
        values.sortby = 'asc';
        values.page = 1;
        values.perpage = DEFAULT_PAGE_COUNT;
        return values
    }

    let defaultFilters = {
        sortby: 'asc',
        fromdate: '',
        todate: '',
        page: 1,
        perpage: DEFAULT_PAGE_COUNT,
    }

    

    const [filterKeys, setFilterKeys] = useState(DEFAULTFILTERS)

    const sortBy = (sortBy, sortType) => {
        DEFAULTFILTERS.sortby = sortBy;
        DEFAULTFILTERS.sortkey = sortType;
        getList(DEFAULTFILTERS);
    }

    const getByYear = (year) => {
        DEFAULTFILTERS.year = year;
        getList(DEFAULTFILTERS);
    }

    const nextPage = (currentPage) => {
        console.log("filerKeys", DEFAULTFILTERS);
        DEFAULTFILTERS.page = currentPage + 1;
        getList(DEFAULTFILTERS);
    }

    const previousPage = (currentPage) => {
        DEFAULTFILTERS.page = currentPage - 1;
        getList(DEFAULTFILTERS);
    }


    const setkeys = () => {
        Object.keys(DEFAULTFILTERS).forEach(key => {
            delete DEFAULTFILTERS[key];
        })
        let obj = Object.keys(TEMP_DEFAULTFILTERS);
        obj.forEach((element, index) => {

            DEFAULTFILTERS[element] = TEMP_DEFAULTFILTERS[obj[index]];
        });
    }
    const getListNew = (keys) => {
       
        return new Promise((resolve, reject) => {
       

            post("list", keys).then((res) => {
            
                const status = res.data.status
                const data = res.data.results
                console.log("-----",status)
                 
                if (status === 200) {
                    
                    setTableData(data)
                    var obj = Object.keys(keys);
                    obj.forEach((element, index) => {
                        DEFAULTFILTERS[element] = keys[obj[index]];
                    });
                 
                    console.log("filerKeys 1", DEFAULTFILTERS,data,status);
                    resolve(res);
                }
              
            }).catch(() => { reject();})

        
             

        });
      };
      


    const getList = (keys) => {
        setLoading(true)
        post("list", keys).then((res) => {
            
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                setTableData(data)
                var obj = Object.keys(keys);
                obj.forEach((element, index) => {
                    DEFAULTFILTERS[element] = keys[obj[index]];
                });
                DEFAULTFILTERS.testkey = "test";
                console.log("filerKeys 1", DEFAULTFILTERS);
                
            }
            setLoading(false)
        }).catch(() => setLoading(false))
    }


    const generateReports = (keys) => {
        setLoading(true)
        keys.page = 1;
        keys.perpage = 1000;
        keys.authorization = localStorage.getItem("token");

        const link = document.createElement("a");
        link.target = "_blank";
        link.download = keys.report_url

        axios
        .get(process.env.REACT_APP_API_URL + keys.uri,{
            params:keys,
        
        responseType: "blob",
      })
      .then((res) => {
        link.href = URL.createObjectURL(
          new Blob([res.data], { type: "application/pdf" })
        );
        link.click();
      });

/*
        post(keys?.uri, keys).then((res) => {
            setLoading(false)
            
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {

                const link = document.createElement("a");
                link.target = "_blank";
                link.download = keys.report_url
                console.log(data.listData);

                axios
                    .get(process.env.REACT_APP_API_URL + keys.report_url,{
                        params: {
                        data:data.listData,
                        },
                    responseType: "blob",
                  })
                  .then((res) => {
                    link.href = URL.createObjectURL(
                      new Blob([res.data], { type: "application/pdf" })
                    );
                    link.click();
                  });
            
            
                
                

            }
        }).catch(() => setLoading(false))
        */
    }

    const addService = async (postData) => {
            setLoading(true)
        await post(postData.uri, postData).then((res) => {
            console.log(res);
            const status = res.data.status
            const data = res.data.data
            setAddServiceData(res);
            setData(res);
            setTimeout(()=>{
                setLoading(false)
            },1000)
        }).catch(() => setLoading(false)
        )
    }

    const redirectTo = (path) => {
        navigate(path);
    }

    const getCustomData = (keys) => {
        setLoading(true)
        post(keys?.uri, keys).then((res) => {
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                setCustomData(data)
                setTimeout(()=>{
                    setLoading(false)
                },500)
            }
        }).catch(() => setLoading(false))
    }


    return {
        addService,
        membersList,
        getMemberList,
        setMemberData,
        getDropDowns,
        dropdownsData,
        filterKeys,
        setFilterKeys,
        getList,
        loading,
        setLoading,
        sortBy,
        tableData,
        nextPage,
        previousPage,
        defaultFilters,
        setkeys,
        addDefaultVals,
        setkeys_params,
        getByYear,
        getCustomData,
        setCustomData,
        serviceData,
        redirectTo,
        setAddServiceData,
        addServiceData,
        getCurrentMonth,
        getCurrentYear,
        generateReports,
        data, setData,
        promiseService,
        getListNew
    }
}

export default useCommonHooks;
