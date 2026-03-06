import logging
import json
import os

class Config:
    def __init__(self, config_file:str):
        with open(config_file, 'r') as f:
            self.config = json.load(f)

    def get(self, key):
        return self.config.get(key)


def setup_logging(log_file:str):
    logging.basicConfig(filename=log_file,
                        level=logging.INFO,
                        format='%(asctime)s:%(levelname)s:%(message)s')


def process_data(data):
    # Example placeholder for data processing logic
    processed_data = [d for d in data if d]
    return processed_data


# Example usage:
# setup_logging('app.log')
# config = Config('config.json')
# processed_data = process_data([1, 2, None, 4])