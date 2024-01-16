// Default import fix
var buildTheme = function(colorsScheme) {
    return {
        colors: [
            colorsScheme["primary"],
            colorsScheme["purple"],
            colorsScheme["success"],
            colorsScheme["yellow"],
            colorsScheme["danger"],
            '#eeaaee',
            '#55BF3B',
            '#DF5353',
            '#7798BF',
            '#aaeeee'
        ],
        chart: {
            backgroundColor: null,
            style: {
                fontFamily: 'Roboto, serif'
            },
        },
        title: {
            style: {
                color: colorsScheme["dark"],
                fontSize: '14px',
                fontWeight: '500'
            },
            align: 'left',
            margin: 30,
        },
        subtitle: {
            style: {
                color: colorsScheme["body-color"]
            },
            align: 'left',
        },
        exporting: {
            buttons: {
                contextButton: {
                    symbolStroke: colorsScheme["gray-500"]
                }
            }
        },
        tooltip: {
            backgroundColor: colorsScheme["gray-900"],
            shadow: false,
            borderRadius: 5,
            style: {
                color: colorsScheme["white"]
            }
        },
        legend: {
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '13px'
            }
        },
        xAxis: {
            gridLineWidth: 1,
            gridLineColor: colorsScheme["gray-300"],
            labels: {
                style: {
                    color: colorsScheme["body-color"],
                }
            },
            lineColor: colorsScheme["gray-400"],
            minorGridLineColor: colorsScheme["danger"],
            tickColor: colorsScheme["gray-400"],
            title: {
                style: {
                    color: colorsScheme["warning"]
    
                }
            },
            crosshair: {
                color: 'white'
            }
        },
        yAxis: {
            gridLineColor: colorsScheme["gray-300"],
            labels: {
                style: {
                    color: colorsScheme["body-color"]
                }
            },
            lineColor: colorsScheme["danger"],
            minorGridLineColor: colorsScheme["primary"],
            tickColor: colorsScheme["gray-400"],
            tickWidth: 1,
            title: {
                style: {
                    color: colorsScheme["body-color"]
                }
            }
        },
        plotOptions: {
            series: {
                shadow: false,
                label: {
                    enabled: false
                },
                dataLabels: {
                    style: {
                        color: colorsScheme["gray-900"],
                    }
                }
            },
            candlestick: {
                lineColor: '#404048'
            },
            map: {
                shadow: false
            }
        },
        drilldown: {
            activeAxisLabelStyle: {
                color: colorsScheme["primary"],
                textDecoration: "none"
            },
            activeDataLabelStyle: {
                color: colorsScheme["body-color"],
                textDecoration: "none"
            },
        },
        // Highstock specific
        navigator: {
            handles: {
                backgroundColor: colorsScheme["white"],
                borderColor: colorsScheme["gray-400"]
            },
            outlineColor: colorsScheme["gray-400"],
            maskFill: colorsScheme["primary-02"],
            series: 
            {
            color: colorsScheme["primary"],
                lineColor: colorsScheme["primary"]
            },
            xAxis: {
                gridLineColor: colorsScheme["gray-400"],
            }
        },
        scrollbar: {
            barBackgroundColor: colorsScheme["gray-400"],
            barBorderColor: colorsScheme["gray-400"],
            buttonArrowColor: colorsScheme["body-color"],
            buttonBackgroundColor: colorsScheme["white"],
            buttonBorderColor: colorsScheme["gray-400"],
            rifleColor: colorsScheme["body-color"],
            trackBackgroundColor: colorsScheme["gray-200"],
            trackBorderColor: colorsScheme["gray-200"]
        },
        // scroll charts
        rangeSelector: {
            buttonTheme: {
                fill: 'none',
                stroke: false,
                style: {
                    color: colorsScheme["body-color"]
                },
                states: {
                    hover: {
                        fill: colorsScheme["gray-300"],
                        stroke: false,
                        style: {
                            color: colorsScheme["dark-07"]
                        }
                    },
                    select: {
                        fill: colorsScheme["gray-300"],
                        stroke: false,
                        style: {
                            color: colorsScheme["dark"]
                        }
                    }
                }
            },
            inputBoxBorderColor: colorsScheme["gray-400"],
            inputStyle: {
                backgroundColor: colorsScheme["white"],
                color: colorsScheme["dark"]
            },
            labelStyle: {
                color: colorsScheme["body-color"]
            }
        },
        navigation: {
            menuStyle: {
                background: 'white',
                color: colorsScheme["body-color"],
                borderColor: colorsScheme["gray-300"],
                borderRadius: '0.25rem',
                boxShadow: '0 .125rem .25rem ' + colorsScheme["dark-07"],
                style: {
                    fontFamily: "'Roboto', sans-serif",
                },
            },
            menuItemStyle: {
                padding: '5px',
                borderColor: colorsScheme["gray-300"],
                borderWidth: 0,
                shadow: false,
                color: colorsScheme["body-color"]
            },
            menuItemHoverStyle: {
                background: colorsScheme["gray-200"],
                color: colorsScheme["dark"]
            }
        },
        // General
        background2: '#E0E0E8'
    };
};

module.exports = {
    build: buildTheme,
};
