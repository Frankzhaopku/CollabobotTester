module.exports = {
  "issueAutoLabelComponent": {
    enable: true,
    notProcess: (title, body, author) => body.includes("/nolabel")
  },
  "labelSetupComponent": {
    enable: true
  },
  "dataService": {
    updateTime: "*/10 * * * *"
  },
  "weeklyReportComponent": {
    enable: true,
    "generateTime": "23 17 * * *"
  },
  "prSizeLabelComponent": {
    enable: true
  }
}
