<template>
  <div>
    <label for="select">
			<select @change="$emit('change', $event.target.value)" name="select" id="select">
				<option value>--Please select a {{ select }}</option>
				<option v-for="option in selectOptions" :key="option" :value="option">
					{{ option }}
				</option>
			</select>
		</label>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "cuisine",
    },
    selectOptions: {
      type: Array,
      default: () => ["tacos", "pizza", "dim sum"],
    },
  },
};
</script>
