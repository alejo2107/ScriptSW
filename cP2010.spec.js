const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const csv = require('csv-parser')
const fs = require('fs')

describe('CP201', function() {
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
    it(`CP201 - Iteration ${i+1}`, async function() {
      // Read CSV file
      fs.createReadStream('./csv/cP201.csv')
        .pipe(csv())
        .on('data', async (data) => {
          // Test name: CP201
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://tucan.toolsincloud.net/")
    // 2 | setWindowSize | 1197x728 | 
    await driver.manage().window().setRect({ width: 1197, height: 728 })
    // 3 | click | name=email | 
    await driver.findElement(By.name("email")).click()
    // 4 | click | name=email | 
    await driver.findElement(By.name("email")).click()
    // 5 | type | name=email | software@prueba.com
    await driver.findElement(By.name("email")).sendKeys(data.email)
    // 6 | click | name=password | 
    await driver.findElement(By.name("password")).click()
    // 7 | type | name=password | 123**
    await driver.findElement(By.name("password")).sendKeys(data.password)
    // 8 | click | name=login | 
    await driver.findElement(By.name("login")).click()
    // 9 | click | css=.grid-sidebar:nth-child(9) img | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(9) img")).click()
    // 10 | click | css=.grid-sidebar:nth-child(7) img | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(7) img")).click()
    // 11 | click | css=.user-handle | 
    await driver.findElement(By.css(".user-handle")).click()
    // 12 | click | css=.user-handle | 
    await driver.findElement(By.css(".user-handle")).click()
    // 13 | click | css=.user-handle | 
    await driver.findElement(By.css(".user-handle")).click()
    // 14 | doubleClick | css=.user-handle | 
    {
      const element = await driver.findElement(By.css(".user-handle"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 15 | close |  | 
    await driver.close()
        })
        .on('end', () => {
          console.log(`Iteration ${i+1} completed.`)
        })
    })
  }
})
