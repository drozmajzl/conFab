class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :track_id, :replies, :comment, :likes, :user, :user_replies
  # has_many :replies, serializer: ReplySerializer

  def user_replies
    object.replies.map{|r| ReplySerializer.new(r)}
  end
end
