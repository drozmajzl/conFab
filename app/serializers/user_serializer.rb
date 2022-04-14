class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :age, :admin

  has_many :setlists
  has_many :setlist_tracks
  # has_many :tracks

end
