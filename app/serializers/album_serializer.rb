class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :album_cover

  has_many :tracks
end
