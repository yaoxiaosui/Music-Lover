
import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import Select


link = "http://localhost:63342/FinalProject/homepage.html?_ijt=t08uug8agj84l4s299rdbgb0j"
class testAll(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome('/Users/Craig/Desktop/FinalProject/chromedriver')

    def test_recommend(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("music").click()
        self.assertIn("Music Page", driver.title)
        driver.find_element_by_id("profile_page").click()
        self.assertIn("Profile Page", driver.title)
        driver.find_element_by_id("recommend").click()
        self.assertIn("Recommendation Page", driver.title)

    def test_cover(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("music").click()
        self.assertIn("Music Page", driver.title)
        driver.find_element_by_id("profile_page").click()
        self.assertIn("Profile Page", driver.title)
        driver.find_element_by_id("cover").click()
        self.assertIn("Cover Page",driver.title)

    def test_post(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("music").click()
        self.assertIn("Music Page", driver.title)
        driver.find_element_by_id("profile_page").click()
        self.assertIn("Profile Page", driver.title)
        driver.find_element_by_id("post").click()
        self.assertIn("Post Page", driver.title)
        driver.find_element_by_name("post").click()
        
    
    def test_searchMusic(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("music").click()
        self.assertIn("Music Page", driver.title)
        driver.find_element_by_id("search_song").click()
        element = driver.find_element_by_name("search_song")
        element.send_keys("oasis")
        driver.find_element_by_name("submit_song").click()
        self.assertIn("Search Songs",driver.title)
    

    def test_playlist(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("music").click()
        self.assertIn("Music Page", driver.title)
        driver.find_element_by_id("profile_page").click()
        self.assertIn("Profile Page",driver.title)
        driver.find_element_by_name("playlist").click()
        self.assertIn("Play List",driver.title)


    def test_follow(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("music").click()
        self.assertIn("Music Page", driver.title)
        driver.find_element_by_id("profile_page").click()
        self.assertIn("Profile Page", driver.title)
        driver.find_element_by_name("follow").click()
        self.assertIn("Follow Result", driver.title)


    def test_search2(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("video").click()
        self.assertIn("Video Page", driver.title)
        driver.find_element_by_id("search_button").click()
        element = driver.find_element_by_name("search")
        element.send_keys("oasis")
        driver.find_element_by_name("submit").click()
        self.assertIn("Video Result", driver.title)



    def test_search1(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("music").click()
        self.assertIn("Music Page", driver.title)
        driver.find_element_by_id("search_artist").click()
        element = driver.find_element_by_name("search")
        element.send_keys("oasis")
        driver.find_element_by_name("submit").click()
        self.assertIn("Search Result", driver.title)
    
      
    def test_video_page(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("video").click()
        self.assertIn("Video Page", driver.title)
        temp = driver.find_element_by_id('title2').text
        self.assertIn('Wonderwall', temp)
    
    def test_music_page(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("music").click()
        self.assertIn("Music Page", driver.title)
        temp = driver.find_element_by_id('title1').text
        self.assertIn('Abbey Road',temp)
    
    def test_gig_page(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("gig").click()
        self.assertIn("Gig Page", driver.title)

    def test_video_page(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("gig").click()
        self.assertIn("Video Page", driver.title)

    def test_sign_in(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("signin").click()
        element1 = driver.find_element_by_name('signin_username')
        element1.send_keys("yaoyuan")
        element2 = driver.find_element_by_name('signin_psw')
        element2.send_keys("123456")
        driver.find_element_by_name("signinbtn").click()
        self.assertIn("Profile Page", driver.title)

    def test_sign_up(self):
        driver = self.driver
        driver.get(link)
        self.assertIn("Home Page", driver.title)
        driver.find_element_by_name("signup").click()
        element1 = driver.find_element_by_name('signup_email')
        element1.send_keys("yuanyao8@illinois.edu")
        element2 = driver.find_element_by_name('signup_username')
        element2.send_keys("yaoyuan")
        element3 = driver.find_element_by_name('signup_psw')
        element3.send_keys("123456")
        driver.find_element_by_name("signupbtn").click()
        self.assertIn("Profile Page", driver.title)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()