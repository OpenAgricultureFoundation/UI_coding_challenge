export const get_peripherals = (device_type)=>{
     return fetch(process.env.REACT_APP_FLASK_URL + '/api/get_user_devices/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                'user_uuid': this.state.user_uuid,
                'user_token': this.props.cookies.get('user_token')
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson["response_code"] == 200) {

                    var devs = [];                  // make array
                    devs = responseJson["results"]; // assign array
                    var device_uuid = 'None'
                    if (devs.length > 0) {         // if we have devices
                        // default the selected device to the first/only dev.
                        var name = devs[0].device_name + ' (' +
                            devs[0].device_reg_no + ')';
                        this.setState({dropDownValue: name});
                        device_uuid = devs[0].device_uuid;
                        this.setState({selected_device_uuid: device_uuid});
                    }

                    this.setState({user_devices: responseJson["results"]})

                    // Now go get the data that requires a device id
                    this.getTempDetails(device_uuid);
                    this.getCO2Details(device_uuid);
                    this.getCurrentStats(device_uuid);
                    this.getLEDPanel(device_uuid);

                    console.log("Response", responseJson["results"])
                }
            })
            .catch((error) => {
                console.error(error);
            });
}