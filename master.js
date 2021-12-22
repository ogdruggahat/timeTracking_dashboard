let arr = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

// $('h3').on('click',function(event){
//   console.log(event.target.id)

//   if(event.target.id == "daily"){
//     $('.square h2').html(arr[0].timeframes.daily.current + 'hrs')
//     $('.square p').html('Previous - ' + arr[0].timeframes.daily.previous + 'hrs')
//   }
// })

$('h3').on('click',function(event){
  
  var array = ['work','play','study','exercise','social','self']
  var moment = '' + event.target.id

  // try to use switch cases!
  // try foreach


  if (moment == "daily"){
    $('.square h2').html(arr[0].timeframes.daily.current + 'hrs')
    $('.square p').html('Previous - ' + arr[0].timeframes.daily.previous + 'hrs')
  }else if (moment == "weekly"){
    $('.square h2').html(arr[0].timeframes.weekly.current + 'hrs')
    $('.square p').html('Previous - ' + arr[0].timeframes.weekly.previous + 'hrs')
  }else{
    $('.square h2').html(arr[0].timeframes.monthly.current + 'hrs')
    $('.square p').html('Previous - ' + arr[0].timeframes.monthly.previous + 'hrs')
  }





})