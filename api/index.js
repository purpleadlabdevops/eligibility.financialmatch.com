const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      request = require('request')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const lpAuth = Buffer.from(`${process.env.LP_KEY}:${process.env.LPS_KEY}`).toString('base64')
app.post('/lp', (req, res) => {
  request({
    method: 'POST',
    url: "https://financialmatch.leadspediatrack.com/post.do",
    qs: req.body.params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${lpAuth}`
    }
  }, (error, response, body) => {
    if(error){
      sendTask(`__ /lp __ ${error} __`)
      res.send(error)
    } else {
      res.send(body)
    }
  })
})

app.post('/firstpromoter', (req, res) => {
  request.post({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': '57af24b347f277b46d8f61ba0395c4dc'
    },
    url: 'https://firstpromoter.com/api/v1/track/signup',
    form: {
      email: req.body.params.email,
      tid: req.body.params.tid,
    }
  }, (error, response, body) => {
    if(error){
      res.send(error)
    } else {
      res.send(body)
    }
  })
})

app.post('/hook', (req, res) => {
  request({
    method: 'get',
    url: `https://hooks.zapier.com/hooks/catch/13692587/3oa9fu6/?name=${req.body.params.name}&email=${req.body.params.email}&phone=${req.body.params.phone}&transaction_id=${req.body.params.transaction_id}&fbp=${req.body.params.fbp}&fbc=${req.body.params.fbc}&gclid=${req.body.params.gclid}`,
  }, (error, response, body) => {
    if(error){
      sendTask(`__ /hook __ ${error} __`)
      res.send(error)
    } else {
      res.send(body)
    }
  })
})

app.post('/hook-3uskego', (req, res) => {
  const urlParams = new URLSearchParams(req.body.params).toString();
  request({
    method: 'get',
    url: `https://hooks.zapier.com/hooks/catch/13692587/3uskego?${urlParams}`,
  }, (error, response, body) => {
    if(error){
      sendTask(`__ /hook-3uskego __ ${error} __`)
      res.send(error)
    } else {
      res.send(body)
    }
  })
})


const sendTask = itemName => {
  const url = process.env.NODE_ENV === 'production' ? process.env.API_production : process.env.API_development
  const queryItem = `mutation { create_item (
    board_id: 4317395367,
    group_id: "new_group",
    item_name: "Emergency Error! ${url} ${itemName}",
    column_values: "{
      \\"dup__of_dev_status\\": {\\"label\\": \\"TO DO\\"},
      \\"color2\\": {\\"label\\": \\"High\\"},
      \\"person\\": {\\"personsAndTeams\\":[{\\"id\\":42185526,\\"kind\\":\\"person\\"}, {\\"id\\":33716972,\\"kind\\":\\"person\\"}, {\\"id\\":42185551,\\"kind\\":\\"person\\"}]}
    }"
  ) { id }}`

  request({
    method: 'POST',
    url: "https://api.monday.com/v2",
    body: JSON.stringify({
      query : queryItem
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : process.env.monday_token
    },
  }, (error, response, body) => {
    if(error){
      console.log('error')
      console.dir(error)
    } else {
      console.log('success')
      const result = JSON.parse(body)
      console.dir(result.data.create_item.id);
    }
  })
}

app.post('/error', (req, res) => {
  sendTask(`__ ${req.body.params.msg} __`)
})

module.exports = {
  path: '/api',
  handler: app,
}
