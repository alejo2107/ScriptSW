const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const csv = require('csv-parser')
const fs = require('fs')

describe('CP501', function() {
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
    it(`CP501 - Iteration ${i+1}`, async function() {
      // Read CSV file
      fs.createReadStream('./csv/cP501.csv')
        .pipe(csv())
        .on('data', async (data) => {
          // Test name: CP501
    // Step # | name | target | value
    // 1 | open | /home.php | 
    await driver.get("https://tucan.toolsincloud.net/home.php")
    // 2 | setWindowSize | 1197x728 | 
    await driver.manage().window().setRect({ width: 1197, height: 728 })
    // 3 | click | css=.grid-sidebar:nth-child(9) img | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(9) img")).click()
    // 4 | click | id=v-pills-home-tab | 
    await driver.findElement(By.id("v-pills-home-tab")).click()
    // 5 | click | id=v-pills-home-tab | 
    await driver.findElement(By.id("v-pills-home-tab")).click()
    // 6 | click | id=v-pills-home-tab | 
    await driver.findElement(By.id("v-pills-home-tab")).click()
    // 7 | click | id=exampleInputEmail1 | 
    await driver.findElement(By.id("exampleInputEmail1")).click()
    // 8 | click | id=exampleInputEmail1 | 
    await driver.findElement(By.id("exampleInputEmail1")).click()
    // 9 | doubleClick | id=exampleInputEmail1 | 
    {
      const element = await driver.findElement(By.id("exampleInputEmail1"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 10 | click | id=exampleInputEmail1 | 
    await driver.findElement(By.id("exampleInputEmail1")).click()
    // 11 | click | id=exampleInputEmail1 | 
    await driver.findElement(By.id("exampleInputEmail1")).click()
    // 12 | click | id=exampleInputPassword1 | 
    await driver.findElement(By.id("exampleInputPassword1")).click()
    // 13 | click | id=exampleInputPassword1 | 
    await driver.findElement(By.id("exampleInputPassword1")).click()
    // 14 | click | id=exampleInputPassword1 | 
    await driver.findElement(By.id("exampleInputPassword1")).click()
    // 15 | doubleClick | id=exampleInputPassword1 | 
    {
      const element = await driver.findElement(By.id("exampleInputPassword1"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 16 | type | id=exampleInputPassword1 | USUARIO01
    await driver.findElement(By.id("exampleInputPassword1")).sendKeys(data.username)
    // 17 | click | name=submit | 
    await driver.findElement(By.name("submit")).click()
    // 18 | click | css=.grid-sidebar:nth-child(7) img | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(7) img")).click()
    // 19 | click | css=.box-home > .container | 
    await driver.findElement(By.css(".box-home > .container")).click()
    // 20 | click | css=.row:nth-child(3) | 
    await driver.findElement(By.css(".row:nth-child(3)")).click()
    // 21 | close |  | 
    await driver.close()
        })
        .on('end', () => {
          console.log(`Iteration ${i+1} completed.`)
        })
    })
  }
})
