const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const csv = require('csv-parser')
const fs = require('fs')

describe('CP602', function() {
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
    it(`CP602 - Iteration ${i+1}`, async function() {
      // Read CSV file
      fs.createReadStream('./csv/cP602.csv')
        .pipe(csv())
        .on('data', async (data) => {
          // Test name: CP602
    // Step # | name | target | value
    // 1 | open | /home.php | 
    await driver.get("https://tucan.toolsincloud.net/home.php")
    // 2 | setWindowSize | 1197x728 | 
    await driver.manage().window().setRect({ width: 1197, height: 728 })
    // 3 | click | css=.grid-sidebar:nth-child(9) img | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(9) img")).click()
    // 4 | click | css=.alert > .text-center | 
    await driver.findElement(By.css(".alert > .text-center")).click()
    // 5 | click | css=.alert | 
    await driver.findElement(By.css(".alert")).click()
    // 6 | click | name=old_password | 
    await driver.findElement(By.name("old_password")).click()
    // 7 | type | name=old_password | 4444
    await driver.findElement(By.name("old_password")).sendKeys(data.oldPass)
    // 8 | click | name=new_password | 
    await driver.findElement(By.name("new_password")).click()
    // 9 | type | name=new_password | 99999
    await driver.findElement(By.name("new_password")).sendKeys(data.newPass)
    // 12 | click | name=ver_password | 
    await driver.findElement(By.name("ver_password")).click()
    // 13 | type | name=ver_password | 99999
    await driver.findElement(By.name("ver_password")).sendKeys(data.vNewPass)
    // 14 | click | css=.text-center:nth-child(7) > .btn | 
    await driver.findElement(By.css(".text-center:nth-child(7) > .btn")).click()
    // 15 | click | css=.grid-sidebar:nth-child(9) img | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(9) img")).click()
    // 16 | click | id=v-pills-profile-tab | 
    await driver.findElement(By.id("v-pills-profile-tab")).click()
    // 17 | click | css=.text-center:nth-child(5) > .btn | 
    await driver.findElement(By.css(".text-center:nth-child(5) > .btn")).click()
    // 18 | click | css=.alert > .text-center | 
    await driver.findElement(By.css(".alert > .text-center")).click()
    // 19 | click | css=.alert > .text-center | 
    await driver.findElement(By.css(".alert > .text-center")).click()
    // 20 | doubleClick | css=.alert > .text-center | 
    {
      const element = await driver.findElement(By.css(".alert > .text-center"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    // 21 | close |  | 
    await driver.close()
        })
        .on('end', () => {
          console.log(`Iteration ${i+1} completed.`)
        })
    })
  }
})
