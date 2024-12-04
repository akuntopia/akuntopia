import moment from 'moment'
import 'moment/dist/locale/id'

export default {
  install: (app, options) => {
    app.config.globalProperties.dateFormatId = (date) => {
      moment.locale('id')
      return moment(date).format('LL')
    }
    app.config.globalProperties.dateTimeFormatId = (date) => {
      moment.locale('id')
      return moment(date).format('LLLL')
    }
    app.config.globalProperties.dateTimeDurationId = (date) => {
      moment.locale('id')
      return moment(date).fromNow()
    }
  }
}
