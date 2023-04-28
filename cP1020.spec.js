const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const csv = require('csv-parser')
const fs = require('fs')

describe('CP102', function() {
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
    it(`CP102 - Iteration ${i+1}`, async function() {
      // Read CSV file
      fs.createReadStream('./csv/cP102.csv')
        .pipe(csv())
        .on('data', async (data) => {
          // Test name: CP102
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("https://tucan.toolsincloud.net/")
    // 2 | setWindowSize | 1197x728 | 
    await driver.manage().window().setRect({ width: 1197, height: 728 })
    // 3 | click | id=auto | 
    await driver.findElement(By.id("auto")).click()
    // 4 | click | id=exampleInputEmail1 | 
    await driver.findElement(By.id("exampleInputEmail1")).click()
    // 5 | type | id=exampleInputEmail1 | user_001
    await driver.findElement(By.id("exampleInputEmail1")).sendKeys(row.name)
    // 6 | click | name=username | 
    await driver.findElement(By.name("username")).click()
    // 7 | type | name=username | swuser001
    await driver.findElement(By.name("username")).sendKeys(row.username)
    // 8 | click | css=.form-group:nth-child(4) > #exampleInputEmail1 | 
    await driver.findElement(By.css(".form-group:nth-child(4) > #exampleInputEmail1")).click()
    // 9 | type | css=.form-group:nth-child(4) > #exampleInputEmail1 | usuario1@fake.com
    await driver.findElement(By.css(".form-group:nth-child(4) > #exampleInputEmail1")).sendKeys(row.email)
    // 10 | click | id=exampleInputPassword1 | 
    await driver.findElement(By.id("exampleInputPassword1")).click()
    // 11 | type | id=exampleInputPassword1 | 00000
    await driver.findElement(By.id("exampleInputPassword1")).sendKeys(row.password)
    // 12 | click | name=signup | 
    await driver.findElement(By.name("signup")).click()
    // 13 | click | css=.text-center:nth-child(1) | 
    await driver.findElement(By.css(".text-center:nth-child(1)")).click()
    // 14 | close |  | 
    await driver.close()
        })
        .on('end', () => {
          console.log(`Iteration ${i+1} completed.`)
        })
    })
  }
})
