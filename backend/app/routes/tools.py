import requests
from typing import List, Dict
from solana.account import Account
from solana.rpc.api import Client

# Example function: Generate Solana Account
def generate_solana_account() -> str:
    """
    Generate a new Solana account and return its address.
    """
    account = Account()
    return account.public_key()

# Example function: Get Solana Account Balance
def get_solana_account_balance(address: str) -> float:
    """
    Get the balance of a Solana account.
    """
    solana_client = Client("https://api.mainnet-beta.solana.com")
    try:
        balance = solana_client.get_balance(address)
        return balance['result']['value'] / 10**9  # Convert lamports to SOL
    except Exception as e:
        print(f"Error retrieving balance: {e}")
        return 0.0

# Example function: Send Solana Tokens
def send_solana_tokens(sender_private_key: str, recipient_address: str, amount: float) -> bool:
    """
    Send Solana tokens from one account to another.
    """
    sender_account = Account(sender_private_key)
    solana_client = Client("https://api.mainnet-beta.solana.com")
    
    try:
        transaction = solana_client.transfer(sender_account, recipient_address, amount)
        return transaction is not None
    except Exception as e:
        print(f"Error sending tokens: {e}")
        return False

# Example function: Query Solana Token Price
def query_solana_token_price(token_symbol: str) -> float:
    """
    Query the current price of a Solana-based token from an external API.
    """
    api_url = f"https://api.coingecko.com/api/v3/simple/price?ids={token_symbol.lower()}&vs_currencies=usd"
    
    try:
        response = requests.get(api_url)
        if response.status_code == 200:
            data = response.json()
            if token_symbol.lower() in data:
                return data[token_symbol.lower()]['usd']
            else:
                return 0.0
        else:
            return 0.0
    except Exception as e:
        print(f"Error querying token price: {e}")
        return 0.0

# Add more utility functions as needed

if __name__ == "__main__":
    # Example usage if running this script directly
    address = generate_solana_account()
    print(f"Generated Solana account address: {address}")
    balance = get_solana_account_balance(address)
    print(f"Account balance: {balance} SOL")
    token_price = query_solana_token_price("SOL")
    print(f"Current SOL price: ${token_price}")
