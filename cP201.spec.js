// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP201', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CP201', async function() {
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
    await driver.findElement(By.name("email")).sendKeys("software@prueba.com")
    // 6 | click | name=password | 
    await driver.findElement(By.name("password")).click()
    // 7 | type | name=password | 123**
    await driver.findElement(By.name("password")).sendKeys("123**")
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
})
