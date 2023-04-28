const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const csv = require('csv-parser')
const fs = require('fs')

describe('CP202', function() {
  this.timeout(30000)
  let driver
  let vars

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })

  afterEach(async function() {
    await driver.quit()
  })

  for (let i = 0; i < 10; i++) {
    it(`CP202 - Iteration ${i+1}`, async function() {
      // Read CSV file
      fs.createReadStream('./csv/cP202.csv')
        .pipe(csv())
        .on('data', async (data) => {
          // Test name: CP202
          // Step # | name | target | value
          // 1 | open | /home.php | 
          await driver.get("https://tucan.toolsincloud.net/home.php")
          // 2 | setWindowSize | 1197x728 | 
          await driver.manage().window().setRect({ width: 1197, height: 728 })
          // 3 | click | css=.grid-sidebar > .icon-sidebar-align > img | 
          await driver.findElement(By.css(".grid-sidebar > .icon-sidebar-align > img")).click()
          // 4 | click | css=.grid-sidebar > .icon-sidebar-align > img | 
          await driver.findElement(By.css(".grid-sidebar > .icon-sidebar-align > img")).click()
          // 5 | click | css=.fa-sign-out-alt | 
          await driver.findElement(By.css(".fa-sign-out-alt")).click()
          // 6 | click | name=login | 
          await driver.findElement(By.name("login")).click()
          // 7 | click | name=email | 
          await driver.findElement(By.name("email")).click()
          // 8 | type | name=email | 1user@fake.com
          await driver.findElement(By.name("email")).sendKeys(data.email)
          // 9 | click | name=password | 
          await driver.findElement(By.name("password")).click()
          // 10 | type | name=password | 44444
          await driver.findElement(By.name("password")).sendKeys(data.password)
          // 11 | sendKeys | name=password | ${KEY_ENTER}
          await driver.findElement(By.name("password")).sendKeys(Key.ENTER)
          // 12 | click | css=.span-fp-error | 
          await driver.findElement(By.css(".span-fp-error")).click()
          // 13 | close |  | 
          await driver.close()
        })
        .on('end', () => {
          console.log(`Iteration ${i+1} completed.`)
        })
    })
  }
})