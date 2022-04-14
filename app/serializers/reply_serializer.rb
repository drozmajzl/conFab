class ReplySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comment_id, :likes, :reply_body, :user


end
