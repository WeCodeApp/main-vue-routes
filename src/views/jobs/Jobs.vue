<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
        <RouterLink :to="{name: 'jobDetails', params: { id: job.id }}">
            <h2> {{ job.title }}</h2>
        </RouterLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    title: 'Web Developer',
                    id: 1,
                    details: "program"
                },
                {
                    title: 'Web Designer',
                    id: 2,
                    details: "design"
                },
                {
                    title: 'Vue Designer',
                    id: 3,
                    details: "Vue design"
                }
            ]
        }
    }
}
</script>

<style>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>