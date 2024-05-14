import eel


from engine.features import *
from engine.command import *


def start():
    eel.init('www')
    
    playAssistantSound()
    
    eel.start('index.html')
