import React from 'react';
// import $ from 'zepto';

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.onLocation = this.onLocation.bind(this);
        this.state = {
            location_info: {address_detail:{}},
            locationIp: ''
        }
    }

    render() {
        let {location_info, locationIp} = this.state;
        return (
            <div>
                <h4>这是 map 定位页面</h4>
                <p>{locationIp}</p>
                <p>省份: {location_info.address_detail.province}</p>
                <p>城市: {location_info.address_detail.city}</p>
                <button onClick={this.onLocation}>定位当前地址</button>
            </div>
        );
    }

    createScript (url) {
        var src = document.createElement('script');
        src.src = url;
        src.type = 'text/javascript';
        $('body').append(src);
    }

    getIp(){
        this.createScript('http://pv.sohu.com/cityjson?ie=utf-8');
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if(returnCitySN['cip']){
                    resolve(returnCitySN['cip'])
                } else {
                    reject('获取失败')
                }
            },100)
        })
    }

    async onLocation () {
        var ip = await this.getIp(),
            _this = this;
        $.ajax({
        	type:"GET",
        	url:"http://api.map.baidu.com/location/ip",
        	dataType:'jsonp',
        	data: {
        		ip: ip,
        		ak: 'h34GDfjM3IE015G3r9WAv3zFD3Zyo60y'
            },
        	success: function(res){
                if(res.status != 0)return;
                // console.log(res);
                _this.setState({
                    location_info: res.content,
                    locationIp: ip
                })
            }
        })
        function getLocation(){   //定位不精确
            if (navigator.geolocation){
                return navigator.geolocation.getCurrentPosition(showPosition);
            }else{
                console.log("Geolocation is not supported by this browser.");
            }
        }
        function showPosition(position){
            let location = position.coords.latitude + ',' + position.coords.longitude;
            console.log(location);
            $.ajax({
                type:"GET",
                url:"http://api.map.baidu.com/geocoder/v2/",
                dataType:'jsonp',
                data: {
                    // location: '40.001699923898,116.48765020686',
                    location,
                    ak: 'IaCY0VdMjIoFQZozNRcSNkRa7LFKjFmZ',
                    output: 'json'
                },
                success: function(res){
                    console.log(res);
                }
            });
        }
        getLocation();
    }
};
