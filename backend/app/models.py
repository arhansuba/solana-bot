from datetime import datetime
from mongoengine import Document, StringField, DateTimeField, ReferenceField, ListField

# Example User Model
class User(Document):
    """
    Represents a user in the Solana bot application.
    """
    username = StringField(required=True, unique=True)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)  # Note: Store hashed passwords
    created_at = DateTimeField(default=datetime.utcnow)

    def __str__(self):
        return f"User(username={self.username}, email={self.email}, created_at={self.created_at})"

# Example Project Model
class Project(Document):
    """
    Represents a project on Solana in the Solana bot application.
    """
    name = StringField(required=True, unique=True)
    description = StringField()
    creator = ReferenceField(User, required=True)
    created_at = DateTimeField(default=datetime.utcnow)
    tags = ListField(StringField())

    def __str__(self):
        return f"Project(name={self.name}, creator={self.creator.username}, created_at={self.created_at})"

# Example Token Model
class Token(Document):
    """
    Represents a token on Solana in the Solana bot application.
    """
    symbol = StringField(required=True, unique=True)
    name = StringField()
    description = StringField()
    created_at = DateTimeField(default=datetime.utcnow)

    def __str__(self):
        return f"Token(symbol={self.symbol}, name={self.name}, created_at={self.created_at})"

# Add more models as needed for your specific application

# Example Usage
if __name__ == "__main__":
    # Create and save example objects
    user1 = User(username="user1", email="user1@example.com", password="password1").save()
    user2 = User(username="user2", email="user2@example.com", password="password2").save()

    project1 = Project(name="Project 1", description="Example project", creator=user1, tags=["solana", "blockchain"]).save()
    project2 = Project(name="Project 2", description="Another project", creator=user2, tags=["defi", "nft"]).save()

    token1 = Token(symbol="SOL", name="Solana", description="Solana token", created_at=datetime.utcnow()).save()

    # Query example
    print("Users:")
    for user in User.objects:
        print(user)

    print("\nProjects:")
    for project in Project.objects:
        print(project)

    print("\nTokens:")
    for token in Token.objects:
        print(token)
