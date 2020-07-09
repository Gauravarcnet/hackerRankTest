await ParticipantContestant.aggregate([
          {
            $lookup: {
              from: 'contests',
              localField: 'contest',
              foreignField: '_id',
              as: 'contest'
            }
          },
          {
            $unwind: {
              path: '$contest',
              preserveNullAndEmptyArrays: true
            }
          },
          {
            $match: {
              ...searchQuery
            }
          },
          {
            $group: {
              _id: '$_id',
              count: {
                $sum: 1
              },
              total: { $sum: '$votes' }
            }
          }
        ])
